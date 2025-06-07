// **[Saturday, June 7, 2025; 12:01:33]** added to just show the journal page no left sidebar.
logseq.ready.then(() => {
  setTimeout(() => {
    logseq.App.toggleLeftSidebar();
  }, 1000); // Wait for UI to load, then toggle sidebar
});
