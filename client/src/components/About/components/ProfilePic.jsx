import profilepic from '../../../assets/about/profilepic.jpg';

const ProfPic = () => {
    return (
        <div className="m-4">
            <img
              src={profilepic}
              alt="Profile"
              className="w-full rounded-lg shadow-md"
            />
          </div>
    );
  };
  
  export default ProfPic;
  