import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-full bg-gray-400 py-24'>
    <div className="max-w-[1100px] m-auto flex">
      <div className="bg-gray-700 text-white p-8 w-[30%]">
        <div className="w-full">
          <Image src={'/cv.jpg'} alt={''} width={200} height={100} className='rounded-full m-auto' />
          <h1 className="text-3xl mt-6 font-bold mb-2 border-t-2 pt-6">Ahmed Raza</h1>
          <p className="text-lg mb-6">Full Stack Developer</p>
          <div className="my-4 border-t-2 pt-6">
            <h3 className="text-lg font-bold">Contact</h3>
            <p>Phone: 0335-2645820</p>
            <p>Email: ahmedraza6100@gmail.com</p>
            <p>Address: Gulshan, Karachi, Pakistan</p>
          </div>
        </div>
      </div>
      <div className=" bg-white p-8 w-[70%]">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2 text-black">About Me</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend ultrices urna, nec
            lacinia mauris placerat ac. Integer scelerisque facilisis urna, at maximus urna
            condimentum id. Nullam commodo, mi eu ultrices hendrerit, neque ipsum ullamcorper neque,
            vitae consequat mi erat id leo.
          </p>
        </div>
        <div className="mb-6 border-t-2 pt-6 border-black">
          <h2 className="text-2xl font-bold mb-2 text-black">Experience</h2>
          <div>
            <h3 className="text-gray-800 text-lg font-bold mb-1">Full Stack Developer</h3>
            <p className="text-gray-700 mb-1">ABC Company</p>
            <p className="text-gray-600 text-sm">2023 - Present</p>
          </div>
          <div>
            <h3 className="text-gray-800 text-lg font-bold mb-1">Frontend Developer</h3>
            <p className="text-gray-700 mb-1">XYZ Company</p>
            <p className="text-gray-600 text-sm">2020 - 2022</p>
          </div>
        </div>
        <div className='border-t-2 pt-6 border-black'>
          <h3 className="text-gray-800 text-2xl font-bold mb-2">Hobbies</h3>
            <p className="text-gray-700 mb-1">Reading</p>
            <p className="text-gray-700 mb-1">Programming</p>
            <p className="text-gray-700 mb-1">Travelling</p>
        </div>
        <div className='border-t-2 pt-6 border-black'>
          <h3 className="text-gray-800 text-2xl font-bold mb-2">Education</h3>
            <p className="text-gray-700 mb-1">Matric - A+</p>
            <p className="text-gray-700 mb-1">Intermediate - A+</p>
        </div>
      </div>
    </div>
    </div> 
  )
}
