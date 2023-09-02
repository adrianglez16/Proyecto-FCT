// React
import { Head, usePage } from '@inertiajs/react'
import { Container, Row  } from "react-bootstrap"

// Components
import NavigationBar from "@/Layouts/NavigationBar";
import Footer from '@/Layouts/Footer';


export default function Index() {
  
    const { posts } = usePage().props;
    console.log(posts);
  
    return (
    <>
        <Head title="Blog" />
      
        <NavigationBar />

        <Container className="pt-3 pb-3">
            <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <div class="col-md-6 px-0">
                    <h1 class="display-4 fst-italic">Title of a longer featured blog post</h1>
                    <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                    <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
                </div>
            </div>

            <div class="row mb-2">
            {posts.length ? (
                posts.map((post, index) => {
                    const fecha = post.created_at.substring(0, 10);
                    const hora = post.created_at.substring(11, 16);
                    const fecha_hora = fecha + ' ' + hora;
                    // console.log(index);

                    return (
                    <div class="col-md-6" key={index}>
                        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">{post.status}</strong>
                            <h3 class="mb-0">{post.title}</h3>
                            <div class="mb-1 text-muted">{fecha_hora}</div>
                            <p class="card-text mb-auto">{post.summary}</p>
                            <a href={"/blog/show/" + post.id} class="stretched-link">Continua leyendo</a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c"></rect>
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                            </svg>
                        </div>
                        </div>
                    </div>
                    );
                })
                ) : (
                <Col className="m-3 pt-3 text-center">
                    <h2>No se ha encontrado ninguna publicacion. ¡Intentalo de nuevo!</h2>
                </Col>
                )
            }

            </div>
        </Container>

        <Footer />
    </>
  )
}