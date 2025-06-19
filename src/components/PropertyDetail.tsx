import { FaShare, FaRuler, FaMapMarker } from 'react-icons/fa';
import { propertyData } from '../data/propertyData'

const PropertyDetail = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 ">
        <div className='flex flex-col gap-8 w-full'>

          <div className='flex flex-col md:flex-row justify-center items-center gap-2'>
            <span className="md:text-4xl text-3xl font-bold text-emerald-900 ">Asking {propertyData.price}</span>
          </div>

          <div className="flex gap-4 flex-col md:flex-row justify-center w-full ">
            <div className='flex gap-4 flex-col md:flex-row items-start md:items-center '>
              <div className="flex w-fit items-center bg-green-50 text-green-700 px-4 py-2 rounded-md">
                <FaRuler className="mr-2" />
                <span>{propertyData.landSize}</span>
              </div>
              <a href="sms:+0457230191" className=" text-emerald-900 w-fit flex items-center border border-gray-300 px-4 py-2 rounded-md  hover:text-green-700 transform transition-all duration-300 ease-in-out">
                <FaShare className="mr-2 " />
                Contact Owner
              </a>
              <div className='flex items-center w-fit bg-green-50 text-green-700 px-4 py-2 rounded-md'>
                <FaMapMarker className="mr-2" />
                <span>{propertyData.location}</span>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <h2 className="text-2xl font-bold text-emerald-900">{propertyData.title}</h2>
            <p className="text-gray-700 leading-relaxed">{propertyData.description}</p>
          
            <h3 className="text-2xl  text-emerald-900 font-semibold mb-2 pb-2 border-b-2 border-[#e8f4ea]">{propertyData.Investment.title}</h3>
            <p className="text-gray-600 leading-2" >{propertyData.Investment.subTitle}</p>
            <ul className="highlight-list">
              {propertyData.Investment.description.map((string, idx)=> {
                return(
                    <li key={idx}>{string}</li>
                )
              })}
            </ul>
             
          </div>

        </div>
      </div>

    </div>
  );
};

export default PropertyDetail;