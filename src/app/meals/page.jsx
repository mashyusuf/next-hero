
import Meals from '@/components/Meals';
export const metadata = {
    title: " Meals Yo",
    description: "Meals Page",
  };

const page = () => {
    

    return (
        <div className='p-12 bg-gray-100 min-h-screen flex flex-col items-center'>
            <h1 className='text-2xl font-bold text-blue-700 mb-4'>
                Choose Your Destination Meals
            </h1>
            <p className='text-lg text-gray-600 mb-8'>Choose Meals Of Your Choice By Searching...</p>
           <Meals></Meals>
        </div>
    );
};

export default page;
