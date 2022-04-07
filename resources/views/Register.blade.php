
@extends('Layouts/app')
@section('content')
<header class="masthead" style="background-image: url('assets/img/contact-bg.jpg')">
    <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <div class="page-heading">
                    <h1>M'inscrire</h1>
                    <span class="subheading">Vous êtes de l'établissement ?</span>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- Main Content-->
<main class="mb-4">
    <!--succes message alert -->
    @if (session("successRegister"))
        <div class="alert alert-success" role="alert">
               {{session("successRegister")}}
        </div>
    @endif
    <!-- ====================== -->
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <p>Tu étudies dans notre établissement , tu peux t'inscrire dans le formulaire ci-dessous</p>
                <div class="my-5">
                
                    <form action="{{route('register.store')}}" method="post" id="contactForm" >
                        @csrf
                        <div class="form-floating">
                            
                            <input class="form-control" id="name" name="name" type="text" value="{{old('name')}}" placeholder="Votre nom"  required />
                            <label for="name">Nom</label>
                            @error('name')
                            <div class="text-danger">{{$message}}</div>
                            @enderror
                            
                        </div>
                        <div class="form-floating">
                            <input class="form-control" id="surname" name="surname" type="text" value="{{old('surname')}}" placeholder="Votre prénom"  required />
                            <label for="surname">Prénom</label>
                            @error('surname')
                            <div class="text-danger">{{$message}}</div>
                            @enderror
                        </div>
                        <div class="form-floating">
                            <input class="form-control" value="{{old('birth')}}" name="birth" id="birth" type="date"  required/>
                            <label for="birth">Date de naissance</label>
                            @error('birth')
                            <div class="text-danger">{{$message}}</div>
                            @enderror
                        </div>
                        <div class="form-floating">
                            <input class="form-control" name="location" id="location" value="{{old('location')}}"  type="text" placeholder="votre lieu de naissance" required />
                            <label for="name">Lieu de naissance</label>
                            @error('location')
                            <div class="text-danger">{{$message}}</div>
                            @enderror
                        </div>
                        <div class="form-floating">
                            <input class="form-control" id="name" name="nationality" value="{{old('nationality')}}" type="text" placeholder="Votre nationnalité" required />
                            <label for="name">Nationnalité</label>
                            @error('nationality')
                            <div class="text-danger">{{$message}}</div>
                            @enderror
                        </div>
                        <div>
                            <p>Vous êtes ?</p>
                            <input  name="sexe"  type="radio" value="f" />
                            <label for="sexe">femme</label>
                            <input  name="sexe"  type="radio" value="h" />
                            <label for="sexe">Homme</label>
                            @error('sexe')
                            <div class="text-danger">{{$message}}</div>
                            @enderror
                        </div>
                        <div class="form-floating">
                            <select name="residence" value="{{old('residence')}}"  class="form-control" >
                                <option value="parent">parent</option>
                                <option value="tuteur">tuteur</option>
                            </select>
                            
                            <label for="name">Où résidez vous ?</label>
                            @error('residence')
                            <div class="text-danger">{{$message}}</div>
                            @enderror
                            
                        </div>
                        <div class="form-floating">
                            <input class="form-control" name="classe" value="{{old('classe')}}"  type="text" placeholder="Votre classe." required />
                            <label for="name">Classe</label>
                            @error('classe')
                            <div class="text-danger">{{$message}}</div>
                            @enderror
                        
                        </div>
                        <div class="form-floating">
                            <input class="form-control" name="filiere" value="{{old('filiere')}}" type="text" placeholder="Votre filière" required />
                            <label for="name">Filière</label>
                            @error('filiere')
                            <div class="text-danger">{{$message}}</div>
                            @enderror
                        </div>
                        <div class="form-floating">
                            <input class="form-control" name="previous_classe" value="{{old('previous_classe')}}" id="name" type="text" placeholder="Votre classe précédente" />
                            <label for="name">Classe précedente</label>
                            @error('previous_classe')
                            <div class="text-danger">{{$message}}</div>
                            @enderror
                        </div>
                      
                        <br />
                        <!-- Submit Button-->
                        
                        <input type="submit"  class="btn btn-primary text-uppercase " value='Soumettre' id="submitButton" />
                    </form>
                   
                </div>
            </div>
        </div>
    </div>
</main>
@endsection