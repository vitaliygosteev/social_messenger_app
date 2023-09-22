'use client';

import Image from 'next/image';

import { User } from '@prisma/client';
import clsx from 'clsx';

interface AvatarGroupProps {
  users?: User[];
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ users = [] }) => {
  const slicedUsers = users.slice(0, 4);

  const positionMap1 = {
    0: 'top-0 left-[12px]',
    1: 'bottom-0',
    2: 'bottom-0 right-0',
  };

  const positionMap2 = {
    0: 'top-0',
    1: 'bottom-0',
    2: 'bottom-0 right-0',
    3: 'top-0 right-0',
  };

  return (
    <div className="relative h-11 w-11">
      {slicedUsers.map((user, index) => (
        <div
          key={user.id}
          className={clsx(
            `
       absolute
       inline-block
       rounded-full
       overflow-hidden
       h-[21px]
       w-[21px]`,
            slicedUsers.length === 3
              ? `${positionMap1[index as keyof typeof positionMap1]}`
              : `${positionMap2[index as keyof typeof positionMap2]}`
          )}
        >
          <Image
            src={user?.image || '/picture/default-avatar.jpg'}
            alt="avatar"
            fill
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
