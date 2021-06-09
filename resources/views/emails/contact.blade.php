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
    <div class="flex flex-col justify-center">
        <h1>Hi {{ $name }} is reaching out to you.</h1>
        <h2>Email: {{ $email }}</h2></br>
        <h2>Message : </h2>
        <h2>{{ $body }}</h2>
    </div>
</body>
</html>

<style>
    
   @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
   html, body {
       height: 100%;
   }

   body {
       margin: 10;
       padding: 0;
       width: 100%;
       font-weight: 100;
       font-family: 'Orbitron';
   }
</style>