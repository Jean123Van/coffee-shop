import CircleSkeleton from './CircleSkeleton';
import RectangleSkeleton from './RectangleSkeleton';

function NavbarProfileSkeleton() {
    return (
        <section className="flex flex-row gap-[10px]">
            <RectangleSkeleton width="90px" height="35px" />
            <CircleSkeleton width="35px" height="35px" />
        </section>
    );
}

export default NavbarProfileSkeleton;
