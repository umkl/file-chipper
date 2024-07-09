import fs from "fs";
import { getAllFiles, getAllFilesSync } from "get-all-files";

export async function file_chip_main(to_remove) {
	console.log(to_remove);
	for await (const filename of getAllFiles(
		`/Users/michael/Clusters/file-chipper/demo`
	)) {
		const oldpath = filename;
		const newpath = oldpath.replace(to_remove, "");
		console.log(oldpath);
		console.log(newpath);
		fs.rename(oldpath, newpath, (err) => {
			if (err) {
				console.error("Error renaming file:", err);
			} else {
				console.log("File renamed successfully");
			}
		});
	}
}
