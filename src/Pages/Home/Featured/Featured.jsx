import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white">
            <SectionTitle
            subHeading={'Check it Out'}
            heading={'Featured Items'}
            ></SectionTitle>

            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 space-x-10 py-20 px-36">
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="">
                <h6>May 30, 2023</h6>
                <h5 className="uppercase">Where cai i get some?</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className="btn btn-outline mt-4 border-0 border-b-4">Order Now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;