<?php snippet('head') ?>

  <div id="content" class="work">
  	<?php snippet('header') ?>

      <h1><?php echo $page->title()->html() ?></h1>
      <?php echo $page->text()->kirbytext() ?>
  </div> <!-- / #content  -->

<?php snippet('modal') ?>

<?php snippet('footer') ?>