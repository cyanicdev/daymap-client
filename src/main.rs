extern crate web_view;
extern crate os_info;
extern crate msgbox;

use web_view::*;

const HTML: &str = include_str!("resources.rc");

fn valid_version(info: os_info::Info) -> bool {

    if info.os_type() == os_info::Type::Windows {
        // We have to check if user is running a version of 
        // Windows 10 under 1809 as EdgeHTML is required
        let version = format!("{}", info.version());
        let chunks: Vec<&str> = version.split(".").collect();

        let version_number: &str = chunks.last().unwrap();

        if info.version().edition().is_none() ||
           info.version().edition().unwrap() != "Windows 10" ||
           version_number.parse::<usize>().unwrap() < 17763 {
            return false
        }
    }
    true
}

fn main() {
    let info = os_info::get();
    if !valid_version(info) {
        return msgbox::create("Error", "Unfortunately, your computer cannot run the Radio Glenunga app as it requires Windows 10 1809.\n\nPlease upgrade your version of Windows to use the app.", msgbox::IconType::Error);
    }

    web_view::builder()
        .title("Daymap")
        .content(Content::Html(HTML))
        .size(800, 600)
        .user_data(())
        .invoke_handler(|_webview, _arg| Ok(()))
        .run()
        .unwrap();
}
