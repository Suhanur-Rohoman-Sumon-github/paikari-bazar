const Charge = ({ title }: { title: string }) => {
  return (
    <div>
      <h1 className="text-center text-xs border  rounded-md m-4 p-4">
        {title}
      </h1>
    </div>
  );
};

export default Charge;
