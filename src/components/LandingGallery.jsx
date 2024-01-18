import SpotlightData from './SpotlightData';
import Button from './Button';
import artistArray from '../assets/MockData/ArtistArray';

// Spotlight gallery for home page
const LandingGallery = () => {

    // current artist for testing
    const artist = artistArray[0];

    return (
        // Container for gallery
        <div id="homeGalleryContainer" 
            className="bg-white 
                        p-20
                        grid
                        grid-cols-5
                        grid-rows-5
                        m-auto
                        border-2">
            
            {/* Button to iterate previous artist in spotlight */}
            <Button direction={"\<"} />

            {/* Container for artist spotlight information */}
            <div id="contentContainer"
                className="row-start-1
                            row-span-5
                            col-span-3
                            pt-2">
                <SpotlightData artist={artist} />
            </div>

            {/* Button to iterate next artist in spotlight */}
            <Button direction={"\>"} />

        </div>
    );
}

export default LandingGallery;