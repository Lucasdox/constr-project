import React, {FC} from 'react'
import { OfficeBuildingIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const Logo: FC = () => (
    <Link href='/' >
        <a className="flex items-center justify-center px-3">
            <OfficeBuildingIcon className="h-10 w-10 mr-2 text-blue-400" />
            <span className='text-2xl font-bold'>Constr</span>
        </a>
    </Link>
);

export default Logo