<?php snippet('head') ?>

  <div id="content" class="work">
  	<?php snippet('header') ?>

	<div class="fixed-content">
		<h1 class="logo">Cool Guys Production</h1>
  		<h3>presents <span>you</span></h3>
	</div>
	
	<div class="arrows"></div>

	<ul class="main-content">
      	<?php $i = 1; ?>
		<?php foreach(page('work')->children() as $project): ?>
		  <li>
		  	<div class="vertical-center">
		  		<div class="center">
		  			<h2><?php echo $project->title()->html() ?></h2>

				    <a href="#" class="play-btn" data-video="video<?php echo $i ?>"><span class="diamond"></span></a>
		  		</div>
		  	</div>
	    	<img src="<?php echo  $project->images()->first()->url() ?>" alt="<?php echo $project->title()->html() ?>" >
		  </li>
      	<?php $i++ ?>
		<?php endforeach ?>
	</ul>

  </div> <!-- / #content  -->

<?php snippet('modal-work') ?>

<?php snippet('footer') ?>