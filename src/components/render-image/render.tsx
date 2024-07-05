import { Close } from "@mui/icons-material"

export const renderImage = ({images,classes,removeImage}) => {
    return (
        {images.length > 0 && (
            <div className="mt-4 space-y-2">
                <div className="relative mx-2">
                    <img
                        src={URL.createObjectURL(images[0])}
                        className={clsx(classes?.img)}
                        alt={`upload-0`}
                    />
                    <button
                        className={clsx(classes?.closeImg)}
                        onClick={() => removeImage(0)} // Ảnh lớn, index 0
                    >
                        <Close fontSize="small" />
                    </button>
                </div>
                {images.length > 1 && (
                    <div className="flex mt-2">
                        {images
                            .slice(
                                1,
                                images.length > 3
                                    ? 3
                                    : images.length
                            )
                            .map((image, index) => (
                                <div
                                    key={index}
                                    className="relative mx-2 w-1/3"
                                >
                                    <img
                                        src={URL.createObjectURL(
                                            image
                                        )}
                                        className={clsx(
                                            classes?.small_image
                                        )}
                                        alt={`upload-${
                                            index + 1
                                        }`}
                                    />

                                    <button
                                        className={clsx(
                                            classes?.closeImg
                                        )}
                                        onClick={() =>
                                            removeImage(
                                                index + 1
                                            )
                                        }
                                    >
                                        <Close fontSize="small" />
                                    </button>
                                </div>
                            ))}
                        {images.length > 3 && (
                            <div className="relative mx-2 w-1/3 cursor-pointer">
                                <img
                                    src={URL.createObjectURL(
                                        images[3]
                                    )}
                                    alt={`upload-2`}
                                    className={clsx(
                                        classes?.small_image,
                                        "opacity-45"
                                    )}
                                />
                                <div
                                    className={clsx(
                                        classes?.moreImg
                                    )}
                                    onClick={handleModalOpen}
                                >
                                    +{images.length - 3}
                                </div>
                                
                            </div>
                        )}
                    </div>
                )}
            </div>
        )}
    )
}