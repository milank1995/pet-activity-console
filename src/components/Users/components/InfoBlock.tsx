interface InfoBlockProps {
  title: string;
  value: string;
}
const InfoBlock = ({ title, value }: InfoBlockProps) => {
  return (
    <div>
      <p className="text-xs font-bold text-purple">{title}</p>
      <p className="text-sm font-normal text-dark-gray mt-1">{value}</p>
    </div>
  );
};

export default InfoBlock;
