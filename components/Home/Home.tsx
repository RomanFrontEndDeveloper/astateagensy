import React from 'react';
import Hero from './Hero/Hero';
import ApartmentType from './AapartmentType/ApartmentType';
import Properties from './Properties/Properties';
import CityProperties from './CityProperties/CityProperties';
import BuildingFeature from './BuildingFeature/BuildingFeature';
import Reviews from './Reviews/Reviews';

const Home = () => {
	return (
		<div className='overflow-hidden'>
			<Hero />
			<ApartmentType />
			<Properties />
			<CityProperties />
			<BuildingFeature />
			<Reviews />
		</div>
	);
};

export default Home;
