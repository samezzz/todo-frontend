'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import client from '../apollo-client';
import { TodoType } from '../interfaces/index';
import AnimatedCheck from './AnimatedCheck';
import { UPDATE_TODO, GET_UPDATED_TODO, GET_TODOS, DELETE_TODO } from './crud';
import Input from './Input';

interface Props {
  data: TodoType;
}

const TaskItem: React.FC<Props> = ({data}) => {
  const router = useRouter();
  const [title, setTitle] = useState<string>(data.title);
  const [isFinished, setIsFinished] = useState<boolean>(data.isFinished);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  

  const handleUpdateTask = async (id: Partial<TodoType>, refresh: () => void) => {
    setLoading(true);
    if (id && id.id) {
      await client.mutate({
        mutation: UPDATE_TODO,
        variables: {
          id: id.id,
          isFinished: !isFinished
        },
        update: (cache, { data }) => {
          cache.writeQuery({
            query: GET_UPDATED_TODO,
            data: { todos: {isFinished: data.isFinished, id: id.id, title: data.title} },
            variables: { id: id.id }
          });
          const cachedTodos = cache.readQuery({ query: GET_TODOS });
          if (!cachedTodos) return;
          const updatedTodos = cachedTodos.todos.map((todo: TodoType) => {
            if (todo.id === id.id) {
              return {
                ...todo,
                isFinished: data.isFinished
              };
            }
            return todo;
          });
          cache.writeQuery({
            query: GET_TODOS,
            data: { todos: updatedTodos },
          });
        },
        refetchQueries: [{ query: GET_TODOS }]
      });

      setIsFinished(!isFinished);
      setIsEditing(false);
      setLoading(false);
    }
  };

  const handleDeleteTask = async (id: Partial<TodoType>, refresh: () => void) => {
    setLoading(true);
    try {
      if (id && id.id) {
        const intId = parseInt(id.id);
        await client.mutate({
          mutation: DELETE_TODO,
          variables: {
            id: intId,
          },
          update: (cache, { data }) => {
            const cachedTodos = cache.readQuery({ query: GET_TODOS });
            if (!cachedTodos) return;
            const updatedTodos = cachedTodos.todos.filter((todo: TodoType) => todo.id !== intId);
            cache.writeQuery({
              query: GET_TODOS,
              data: { todos: updatedTodos },
            });
          },
          refetchQueries: [{ query: GET_TODOS }]
        });
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    refresh();
  };



  return (
    <div className="flex bg-white dark:bg-[#1c1c1c] p-2 mb-2 last:mb-0 rounded cursor-pointer">
      <div className="basis-8 mr-2">
        <AnimatedCheck checked={isFinished} toggle={() => handleUpdateTask({id: data.id}, router.refresh)} />
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleUpdateTask({id: data.id, title, isFinished: !isFinished}, router.refresh)
      }} className="flex flex-1">
        <Input name="todo" value={title} disabled={isFinished} onChange={value => {
          setTitle(value);
          setIsEditing(true);
        }} />
        {!isLoading ? (
          <>
            {
              isFinished && (
                <button type='button' title="delete" onClick={() => handleDeleteTask({id: data.id}, router.refresh)} className="text-red-500 text-sm px-2 ml-2 cursor-pointer hover:bg-black/10 dark:hover:bg-black/50 rounded">
                  <FaTrash />
                </button>
              )
            }
            {
              isEditing && (
                <button type='submit' title="editing" className="text-[#0b9219] text-sm px-2 ml-2 cursor-pointer hover:bg-black/10 dark:hover:bg-black/50 rounded">
                  <FaEdit />
                </button>
              )
            }
          </>
          ) : (
        <div className="grid place-items-center text-blue-500 text-lg font-bold ml-2 w-8 h-8 animate-spin">
          <AiOutlineLoading3Quarters />
        </div>
          )
        }
      </form>
    </div>
  );
};

export default TaskItem;
