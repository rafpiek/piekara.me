interface SectionTitleProps {
  children: React.ReactNode;
  id?: string;
}

export default function SectionTitle({ children, id }: SectionTitleProps) {
  return (
    <h2
      id={id}
      className="text-2xl mb-8 flex items-center gap-3 after:content-[''] after:h-px after:bg-[#333] after:flex-grow"
    >
      {children}
    </h2>
  );
}



