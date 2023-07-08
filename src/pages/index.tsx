import Image from 'next/image';
import { Inter } from '@next/font/google';
import Search from '../../ui/search';
import UsersTable from '../../ui/table';

const inter = Inter({ subsets: ['latin'] });
const fakeUser = {
  id: 123,
  name: 'John Doe',
  username: 'johndoe',
  email: 'johndoe@example.com',
} as any;

export default function Home() {
  return (
    <main className='p-4 md:p-10 mx-auto max-w-7xl'>
      <Search />
      <div className='mt-6'>{<UsersTable users={[fakeUser]} />}</div>
    </main>
  );
}
