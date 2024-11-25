import Loader from "@/components/shared/Loader";


const Home = () => {
  const isLoading = true;
  const posts = false;
  const data = [];
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>

          {isLoading && !posts ? (
            <Loader />
          ) : (
            <ul>
              test
              {/* {data?.map(post => (
                <div>

                </div>
              )})} */}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home;