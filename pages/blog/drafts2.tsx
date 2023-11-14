import { useSession } from 'next-auth/react';

const MyComponent = () => {
  const { data: session, status } = useSession();
  const isLoggedIn =
    session && session?.user?.email == process.env.NEXT_PUBLIC_USER_EMAIL;

  if (status === 'authenticated') {
    console.log('Session:', session);
    console.log('Email:', session?.user?.email);

  }

  if (isLoggedIn) {
    console.log('Logged in:', isLoggedIn);


  }

  return (
    <div>
      {status === 'authenticated' ? (
        <p>Logged in as {session?.user?.email}</p>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
};

export default MyComponent;
