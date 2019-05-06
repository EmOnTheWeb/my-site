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
		<div class="img-wrapper">
			<img class="container-img" src="../assets/images/port_1280.jpg" />
		</div>
		<div class="text">
			<p>Web development is like shipping containers.</p>

			<p>You make little blocks of functionality and then stack them on top of one another.</p>

		</div>
	</section>
	<section class="container light-gray">
		<div class="container-content">
			<h2 class="heading">Portfolio -</h2>
		</div>
	</section>
	<section class="container dark">
		<div class="container-content">
			<h2 class="heading">Testamonials -</h2>
			<p>
				Emilie is a talented full stack developer that we've worked with for several years. She's totally reliable, communicates well and is committed to staying up to date with technology advances and methodology improvements. We recommend her whole-heartedly. 

				<p>Nick Ellison, Managing Director, Purr Group</p> 
			</p>
			<p>
				Emilie is by far the most expedient, professional, and competent contractor I've worked with.

				<p>Kathy Hammond, MedFit Staffing Solutions</p>
			</p>
		</div>
	</section>
	@include('_partials.footer')

@endsection
