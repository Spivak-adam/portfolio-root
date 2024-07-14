import React from 'react';
import ImageGallery from 'react-image-gallery';

function GalleryPage(){
    const images = [
        {
            original: 'images/intel86x-arch-assembly-ascii.png',
            thumbnail: 'images/intel86x-arch-assembly-ascii.png',
            description: 'Intel 86x assembly ascii translation program (2024).',
            originalHeight: '450px',
        },
        {
            original: 'images/intel86x-arch-assembly-gen-sort.png',
            thumbnail: 'images/intel86x-arch-assembly-gen-sort.png',
            description: 'Intel 86x assembly random generator and sort number program (2024).',
            originalHeight: '450px',
        },
        {
            original: 'images/chess-variation.png',
            thumbnail: 'images/chess-variation.png',
            description: 'Inspiration for text-base chess game vartion (2023).',
            originalHeight: '450px',
        },
        {
            original: 'images/chess-variation-exe.png',
            thumbnail: 'images/chess-variation-exe.png',
            description: 'Text-form of Chess-board in variation game (2023).',
            originalHeight: '450px',
        },
        {
            original: 'images/python-chess-variation-oop.png',
            thumbnail: 'images/python-chess-variation-oop.png',
            description: 'Code snippet of chess game variation that calculates movement on board (2023).',
            originalHeight: '450px',
        },
        {
            original: 'images/technical-writing-proposal.png',
            thumbnail: 'images/technical-writing-proposal.png',
            description: 'Finntrack 30 page Technical Proposal Document (2023).',
            originalHeight: '450px',
        },
        {
            original: 'images/techical-document-instructions.png',
            thumbnail: 'images/techical-document-instructions.png',
            description: 'Instructions: How to remove and replace a toilet (2023).',
            originalHeight: '450px',
        },
        {
            original: 'images/adhd-poem.png',
            thumbnail: 'images/adhd-poem.png',
            description: 'Occasional poem written to describe ADHD (2024).',
            originalHeight: '450px',
        },
        {
            original: 'images/adhd-visuals-psychology.png',
            thumbnail: 'images/adhd-visuals-psychology.png',
            description: 'Psychology paper on how visuals help children with ADHD (2022).',
            originalHeight: '450px',
        },
        {
            original: 'images/fusion-power-point.png',
            thumbnail: 'images/fusion-power-point.png',
            description: 'Cover page to powerpoint to describe using Fusion to create energy (2022).',
            originalHeight: '450px',
        }
    ]

    return(
        <>
            <h2>Gallery</h2>
            <p>A slide show displaying some of my work.</p>
            <article id="galleryImages">
                <ImageGallery items={images}/>
            </article>
        </>
    )
}

export default GalleryPage;