<?php

/**
 * Class DOM
 *
 * Extend DOMDocument and rewrite saveHTML method for cut DTD.
 */
class DOMAwdLinkReplacer extends DOMDocument {
  public function saveHTML() {
    return preg_replace('/^<!DOCTYPE.+?>/', '', str_replace( array('<html>', '</html>', '<body>', '</body>'), array('', '', '', ''), parent::saveHTML()));
  }
}
