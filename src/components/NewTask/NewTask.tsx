import { FormEvent, useContext, useRef, useState } from 'react';

import AddIcon from '@/assets/icons/add.svg';
import Button from '@/components/Button';
import Input from '@/components/Input';
import TaskContext from '@/store/taskContext';

import styles from './NewTask.module.css';

const NewTask = () => {
  const [value, setValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const { addNewTaskHandler } = useContext(TaskContext);

  const addTask = () => {
    addNewTaskHandler(value);
    setValue('');
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value === '') {
      return;
    }
    addTask();
    inputRef.current?.blur();
  };

  return (
    <form onSubmit={submitHandler} className={styles['new-task']}>
      <Input
        id="newTask"
        name="newTask"
        placeholder="Add a new task..."
        value={value ?? ''}
        changeHandler={(event) => setValue(event.target.value)}
      />
      <Button icon={<AddIcon />} type="submit">
        <span>Add</span>
      </Button>
    </form>
  );
};

export default NewTask;
