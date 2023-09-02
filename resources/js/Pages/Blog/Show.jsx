// React
import { Head, usePage } from '@inertiajs/react'
import { Container, Row  } from "react-bootstrap"

// Components
import NavigationBar from "@/Layouts/NavigationBar";
import Footer from '@/Layouts/Footer';
import Comments from '@/Components/Comments';


export default function Guest() {
    const { post } = usePage().props;
    const { comments } = usePage().props;
    const { usuarios } = usePage().props;

    // console.log(post);
    // console.log(comments);
    // console.log(usuarios);
  
  return (
    <>
        <Head title={"Blog - " + post.title}/>
      
        <NavigationBar />

        <Container className="pt-3 pb-3">
        <div class="row g-5">
                <div class="col-md-8">
                    <h1 class="pb-4 mb-4 fst-italic border-bottom">
                        {post.title}
                    </h1>

                    {/* Contenido */}
                    <p>{post.content}</p>

                    {/* Comentarios */}
                    <Comments comments={comments} usuarios={usuarios}/>


                    {/* Pagination para blogs */}
                    {/* <nav class="blog-pagination" aria-label="Pagination">
                        <a class="btn btn-outline-primary" href="#">Older</a>
                        <a class="btn btn-outline-secondary disabled" href="#" tabIndex="-1" aria-disabled="true">Newer</a>
                    </nav> */}

                </div>

                {/* Section Derecha */}
                <div class="col-md-4">
                    <div class="position-sticky" style={{ top: '2rem' }}>
                        {/* Resumen */}
                        <div class="p-4 mb-3 bg-light rounded">
                            <h4 class="fst-italic">Resumen</h4>
                            <p class="mb-0">{post.summary}</p>
                        </div>

                        {/* Elsewhere */}
                        <div class="p-4">
                            <h4 class="fst-italic">Archives</h4>
                            <ol class="list-unstyled mb-0">
                                <li><a href="#">March 2021</a></li>
                                <li><a href="#">February 2021</a></li>
                                <li><a href="#">January 2021</a></li>
                                <li><a href="#">December 2020</a></li>
                                <li><a href="#">November 2020</a></li>
                                <li><a href="#">October 2020</a></li>
                                <li><a href="#">September 2020</a></li>
                                <li><a href="#">August 2020</a></li>
                                <li><a href="#">July 2020</a></li>
                                <li><a href="#">June 2020</a></li>
                                <li><a href="#">May 2020</a></li>
                                <li><a href="#">April 2020</a></li>
                            </ol>
                        </div>

                        {/* Elsewhere */}
                        <div class="p-4">
                            <h4 class="fst-italic">Elsewhere</h4>
                            <ol class="list-unstyled">
                                <li><a href="#">GitHub</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Facebook</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

        <Footer />
    </>
  )
}