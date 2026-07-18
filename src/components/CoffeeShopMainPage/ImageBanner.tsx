import { LuShare } from 'react-icons/lu';

interface ImageBannerProps {
    images: string[];
    coverImg: string;
}

function ImageBanner({ images, coverImg }: ImageBannerProps) {
    return (
        <div
            style={{
                height: '350px',
                marginBottom: '60px',
                position: 'relative',
            }}
        >
            <button
                style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    border: 'none',
                    width: '40px',
                    height: '40px',
                    borderRadius: '100%',
                    top: '25px',
                    right: '25px',
                }}
            >
                <LuShare size={15} />
            </button>
            <div
                style={{
                    position: 'absolute',
                    bottom: '-45px',
                    zIndex: '10',
                    width: '100%',
                    height: '100px',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '12px',
                    padding: '0 40px',
                }}
            >
                {images.map((image, index, arr) => (
                    <div
                        style={{
                            width: '100px',
                            height: '100%',
                            backgroundColor: 'white',
                            padding: '2px',
                            borderRadius: '7px',
                            position: 'relative',
                        }}
                    >
                        <div
                            style={{
                                position: 'relative',
                                borderRadius: '5px',
                                height: '100%',
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                src={image}
                                width={'100%'}
                                height={'100%'}
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            {index + 1 === arr.length && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        top: '0',
                                        left: '0',
                                        height: '100%',
                                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <span
                                        style={{
                                            color: 'white',
                                            fontSize: '14px',
                                        }}
                                    >
                                        +12
                                    </span>{' '}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <img
                src={coverImg}
                style={{
                    objectFit: 'cover',
                    borderRadius: '10px',
                }}
                width={'100%'}
                height={'100%'}
            />
        </div>
    );
}

export default ImageBanner;
