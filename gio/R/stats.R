#' @export
gio_stats <- function(g){

	# create dependency
	path <- system.file("inst/htmlwidgets/stats", package = "gio")
	dep <- htmltools::htmlDependency(
		name = "stats",
		version = "17",
		src = c(file = path),
		script = "stats.min.js"
	)

	# append dependency to gio.js
	g$dependencies <- append(g$dependencies, list(dep))

	# add stats variable
	g$x$stats <- TRUE

	return(g)
}
