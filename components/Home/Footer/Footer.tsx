import Image from 'next/image';
import React from 'react';
import milenium from '@/public/images/milenium.png';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='pt-20 pb-12 bg-black '>
			<div className='w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20'>
				{/* 1Footer Part */}
				<div className=''>
					<div className='flex items-center space-x-2'>
						<div className='md:w-16 md:h-14 w-10 h-10 text-white flex items-center justify-center flex-col'>
							<Image
								src={milenium}
								alt='Real Estate Agency Logo'
								width={50}
								height={50}
								priority
								className='object-contain'
							/>
						</div>
						<h1 className='text-white font-bold text-sm sm:text-base md:text-xl'>
							Milenium
						</h1>
					</div>
					<p className='text-gray-300 mt-6'>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit.
					</p>
					<p className='text-gray-300 mt-4 font-semibold'>
						milenium69@gmail.com
					</p>
					<p className='text-gray-300 mt-2 font-semibold'>
						+38 067 380 11 64
					</p>
					{/* Social Links */}
					<div className='flex items-center space-x-4 mt-6'>
						<FaFacebookF className='w-6 h-6 text-blue-300 ' />
						<FaTiktok className='w-6 h-6 text-pink-200 ' />
						<FaInstagram className='w-6 h-6 text-pink-600 ' />
					</div>
				</div>
				{/* 2nd Part */}
				<div className='md:mx-auto'>
					<h1 className='text-lg text-white font-bold mb-7	 mt-4'>
						Popular Search
					</h1>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Apartment For Rent
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Apartment Low to High
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Offices For By
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Offices For Rent
					</p>
				</div>
				{/* 3nd Part */}
				<div className='lg:mx-auto'>
					<h1 className='text-lg text-white font-bold mb-7 mt-4'>
						Quick Link
					</h1>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Terms pf use
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Privacy Policy
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Pricing Plans
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Our Services
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Contact Support
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Careers
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						FAQ
					</p>
				</div>
				{/* 4nd Part */}
				<div className='md:mx-auto'>
					<h1 className='text-lg text-white font-bold mb-7 mt-4'>
						Discover
					</h1>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Miami
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Los Angeles
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Chicago
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						NewYork
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Contact Support
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						London
					</p>
				</div>
			</div>
			<p className='text-center mt-4 text-base text-white opacity-70'>
				©Copyright 2025 by webdev warriors
			</p>
		</div>
	);
};

export default Footer;
