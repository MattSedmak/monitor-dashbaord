export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className='max-w-screen-2xl px-4 py-8 lg:px-14 flex justify-between items-center'>
      {children}
    </header>
  );
};
