

const Members = ({member}) => {
    const {name,role,contactinfo,visitinghour}= member;
    return (
        <div>
        <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4">
      <div className="bg-green-500 text-white py-2 px-4">
        <h2 className="text-xl font-semibold">{name}</h2>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-2">{role}</p>
        <p className="text-gray-500 mb-2">{contactinfo}</p>
        <p className="text-gray-500">{visitinghour}</p>
      </div>
    </div>
        </div>
    );
};

export default Members;