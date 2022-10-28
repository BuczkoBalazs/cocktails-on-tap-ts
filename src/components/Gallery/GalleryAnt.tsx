import React, { useState } from 'react';
import { GalleryHeader } from './GalleryHeader';
import { BackTop } from 'antd';
import 'antd/dist/antd.css';
import { GallerySpace } from './GalleryAntStyle';
import { GalleryCocktailWrapper } from './GalleryCocktailWrapper';

export const GalleryAnt = () => {
    
    const [searchInput, setSearchInput] = useState<string>('');

    const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value);

    return (
    <GallerySpace direction='vertical'>
        <GalleryHeader searchInput={searchInput} inputChangeHandle={inputChangeHandle} />
        <GalleryCocktailWrapper searchInput={searchInput} />
        <BackTop />
    </GallerySpace>
    )
};