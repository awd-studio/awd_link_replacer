<?php

/**
 * Class DOM
 *
 * Extend DOMDocument and rewrite saveHTML method for cut DTD.
 */
class DOM extends DOMDocument {
  public function saveHTML() {
    return preg_replace('/^<!DOCTYPE.+?>/', '', str_replace( array('<html>', '</html>', '<body>', '</body>'), array('', '', '', ''), parent::saveHTML()));
  }
}
