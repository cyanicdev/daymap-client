#![windows_subsystem = "windows"]
extern crate web_view;

use web_view::*;

const HTML: &str = include_str!("resources.rc");

fn main() {
    web_view::builder()
        .title("Daymap")
        .content(Content::Html(HTML))
        .size(800, 600)
        .user_data(())
        .invoke_handler(|_webview, _arg| Ok(()))
        .run()
        .unwrap();
}
