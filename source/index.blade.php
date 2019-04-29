@extends('_layouts.master')

@section('body')
	@include('_partials.header')

	@include('_partials.top-section')
	<section class="container">
		<div class="container-content">
			<h2 class="heading">About -</h2>
			<p>
				I'm a full stack web developer who does PHP and Javascript and dabbles in design.<br>
				Particularly well versed in building large CMS ( e.g Wordpress ) backed websites with custom integrations, and Ionic Framework for mobile apps. <br>
				But have worked with much more - Codigniter, OpenCart, React Native, SASS etc.<br> 
				I believe in choosing the tech appropriate to the project. <br>
				and am a human being with integrity. 
			</p>
			<a class="button yellow">Contact</a>
		</div>
	</section>
	<section class="container img-text light-gray">
		<div class="container-img"></div>

	</section>


	@include('_partials.footer')

@endsection
