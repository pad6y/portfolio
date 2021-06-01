<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
        

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        <!-- Scripts -->
        <script src="{{ mix('js/app.js') }}" defer></script>
    </head>
    <body class="antialiased">
        <div class="flex flex-col justify-center items-center my-auto min-h-screen">
            <h1 class="text-2xl">
                Oops....This page does not exist... click
                <a href="{{ url('/') }}" class="text-blue-500 hover:text-blue-800">here</a>
                to go back to the site!
            </h1>
            <img src="{{ asset('storage/images/romson-preechawit-Vy2cHqm0mCs-unsplash.jpg') }}" alt="error" class="mt-5">
        </div>
    </body>
</html>

<style>
    
    @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
    html, body {
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        width: 100%;
        color: #B0BEC5;
        display: table;
        font-weight: 100;
        font-family: 'Orbitron';
    }
    
    img {
        height: 80vh;
    }
</style>