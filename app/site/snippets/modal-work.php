	<div class="modal">
		<div class="modal-fade-screen">
			<div class="closeModal"><span class="cross"></span></div>
			<div class="modal-inner">
		      	<?php $i = 1; ?>
				<?php foreach(page('work')->children() as $project): ?>
		        <div class="video-modal video<?php echo $i ?>">
					<iframe src="https://player.vimeo.com/video/<?php echo $project->reelUrl() ?>?autoplay=0?api=1&player_id=vimeoplayer" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
				</div>
      			<?php $i++ ?>
				<?php endforeach ?>
			</div>
		</div>
	</div>