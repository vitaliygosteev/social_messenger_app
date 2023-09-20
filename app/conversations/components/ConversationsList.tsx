'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { MdOutlineGroupAdd } from 'react-icons/md';

import useConversation from '@/app/hooks/useConversations';
import { User } from '@prisma/client';
import { FullConversationType } from '@/app/types';
import ConversationBox from './ConversationBox';

interface ConversationsListProps {
  users: User[];
  title?: string;
  initialItems: FullConversationType[];
}

const ConversationsList: React.FC<ConversationsListProps> = ({
  users,
  title,
  initialItems,
}) => {
  const [items, setItems] = useState(initialItems);
  const { conversationId, isOpen } = useConversation();
  return (
    <aside
      className={clsx(
        `fixed
        inset-y-0
        pb-20
        lg:pb-0
        lg:left-20
        lg:w-80
        lg:block
        overflow-y-auto
        border-r
        border-gray-200`,
        isOpen ? 'hidden' : 'block w-full left-0'
      )}
    >
      <div className="px-5">
        <div className="flex justify-between mb-4 pt-4">
          <div className="text-2xl font-bold text-neutral-800">Messages</div>
          <div
            className="
            rounded-full
            p-2
            bg-gray-100
            text-gray-600
            cursor-pointer
            hover:opacity-75
            transition
          "
          >
            <MdOutlineGroupAdd size={20} />
          </div>
        </div>
        {items.map((item) => (
          <ConversationBox
            key={item.id}
            data={item}
            selected={conversationId === item.id}
          />
        ))}
      </div>
    </aside>
  );
};

export default ConversationsList;
