
@extends('Layouts/app')
@section('content')
  
      
     <!-- Page Header-->
   
       
        <header class="masthead" style="background-image:url('{{url("storage/img/school.jpg")}}')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="site-heading">
                            <h1>Notre école</h1>
                            <span class="subheading">L'école d'excellence</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Main Content-->
      <main>
        <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="{{route('register')}}" role="button">M'inscrire</a>
          </div>
      </main>
@endsection