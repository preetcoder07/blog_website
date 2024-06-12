export default function Home(props) {
    return (
        <div >
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center home_top " >

                <div className="img_text">
                    <div className="col-md-6 p-lg-5 mx-auto my-5 ">
                        <h1 className="display-3 fw-bold">Chronicals</h1><br />
                        <h3 className="mb-3 top_2">Embrace the Past, Envision the Future</h3>
                    </div>
                    <img className="img_lap" src="laptop.png" alt="working" />
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>



            <div className="row mb-2 blogs_pages" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 ">#1</strong>
                            <h3 className="mb-0">Lens Artists Challenge : Artificial Intelligence and Photography</h3>
                            <div className="mb-1 text-body-secondary">June 12</div>
                            <p className="card-text mb-auto">It's something I wanted to become familiar with maybe not use fully, but become familiar with.</p>
                            <a href="https://annegeephoto.com/2024/06/07/lens-artists-challenge-302-artificial-intelligence-and-photography/" target="_blank" className="icon-link gap-1 icon-link-hover stretched-link">
                                Continue reading
                            </a>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img src="swans_blogs.webp" alt="Thumbnail" width="200" height="250"/>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 ">#2</strong>
                            <h3 className="mb-0">One man revolution</h3>
                            <div className="mb-1 text-body-secondary">Aug 11</div>
                            <p className="mb-auto">Going through some old photos for this post and a TV news item about the upcoming election sparks memories. </p>
                            <a href="https://bereavedsingledad.blog/2024/06/02/one-man-revolution/" className="icon-link gap-1 icon-link-hover stretched-link">
                                Continue reading
                            </a>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                        <img src="one_revolution.webp" alt="Thumbnail" width="200" height="250"/>
                        </div>
                    </div>
                </div>
            </div>



            <div className="row align-items-center  signup" >
                <div className="col-lg-7 text-center text-lg-start" style={{ color: props.mode === "dark" ? "white" : "black" }} >
                    <h1 className="display-4 fw-bold lh-1 mb-3">Join Our Blogging Community Sign Up Today!</h1>
                    <p className="col-lg-10 fs-4">Unlock exclusive content, connect with fellow enthusiasts, and share your stories. Don't miss out on the latest updates and insights. Join now</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>

                        <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                    </form>
                </div>
            </div>


            <div className="container footer"  style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="#" className="nav-link px-2 ">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 ">Features</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 ">Pricing</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 ">FAQs</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 ">About</a></li>
                    </ul>
                    <p className="text-center "  style={{ color: props.mode === "dark" ? "white" : "black" }}>© 2024 Chronicals, pvt</p>
                </footer>
            </div>

        </div>
    );
}
