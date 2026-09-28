import { LuPlus } from 'react-icons/lu';

function UploadPhotoBoxBtn() {
    return (
        <div className="border border-dashed text-[30px] w-[70px] h-[70px] rounded-[5px] border-brown flex flex-row items-center justify-center">
            <LuPlus className="text-[gray]" />
        </div>
    );
}

export default UploadPhotoBoxBtn;
