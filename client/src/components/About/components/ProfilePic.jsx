import profilepic from '../../../assets/about/profilepic.jpg';

const ProfPic = () => {
    return (
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img
              src={profilepic}
              alt="Profile"
              className="w-full rounded-lg shadow-md"
            />
          </div>
    );
  };
  
  export default ProfPic;
  