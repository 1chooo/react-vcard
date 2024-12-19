interface Props {
  text: string;
}

function AboutHeader({ text }: Props) {
  return (
    <h2 className="text-light-gray text-lg font-bold mt-[30px] mb-[30px]">
      <code>{text}</code>
    </h2>
  );
};

export default AboutHeader;
