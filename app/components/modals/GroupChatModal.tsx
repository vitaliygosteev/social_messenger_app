'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

import Modal from './Modal';
import Input from '../inputs/Input';
import Select from '../inputs/Select';
import Button from '../Button';
import { User } from '@prisma/client';

interface GroupChatModalProps {
  isOpen?: boolean;
  users: User[];
  onClose: () => void;
}

const GroupChatModal: React.FC<GroupChatModalProps> = ({
  isOpen,
  users = [],
  onClose,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      members: [],
    },
  });

  const members = watch('members');

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post('/api/conversations', {
        ...data,
        isGroup: true,
      })
      .then(() => {
        router.refresh();
        onClose();
      })
      .catch(() => toast.error('You must add at least 2 users!'))
      .finally(() => setIsLoading(false));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Create a group chat
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Create a group chat.
            </p>
            <div className="mt-5 flex flex-col gap-y-8">
              <Input
                id="name"
                label="Name"
                disabled={isLoading}
                required
                register={register}
                errors={errors}
              />
              <Select
                label="Members"
                value={members}
                disabled={isLoading}
                options={users.map((user) => ({
                  value: user.id,
                  label: user.name,
                }))}
                onChange={(value: any) =>
                  setValue('members', value, { shouldValidate: true })
                }
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Button type="submit" disabled={isLoading}>
            Create
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default GroupChatModal;
