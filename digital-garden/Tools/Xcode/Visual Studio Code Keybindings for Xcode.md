#tool #xcode #swift

Create the following file:

```shell
vim ~/Library/Developer/Xcode/UserData/KeyBindings/VSCode.idekeybindings
```

With this content:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>Menu Key Bindings</key>
	<dict>
		<key>Key Bindings</key>
		<array>
			<dict>
				<key>Action</key>
				<string>analyzeActiveRunContext:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.Analyze</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.Analyze</string>
				<key>Group</key>
				<string>Product Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>^@b</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Analyze</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>buildActiveRunContext:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.Build</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.Build</string>
				<key>Group</key>
				<string>Product Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>^b</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Build</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>cleanActiveRunContext:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.Clean</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.Clean</string>
				<key>Group</key>
				<string>Product Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>^@k</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Clean Build Folder…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>compileFile:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.CompileFile</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.CompileFile</string>
				<key>Group</key>
				<string>Product Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Perform Action</string>
				<key>Title</key>
				<string>Compile File</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>toggleDebuggerVisibility:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.DebuggerToggleVisibility</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.DebuggerToggleVisibility</string>
				<key>Group</key>
				<string>View Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>@j</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Debug Area</string>
				<key>Title</key>
				<string>Show Debug Area</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>duplicate:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.Duplicate</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.Duplicate</string>
				<key>Group</key>
				<string>Edit Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>~$</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Duplicate</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>editAndAnalyzeActiveRunContext:</string>
				<key>Alternate</key>
				<string>YES</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.EditAndAnalyze</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.EditAndAnalyze</string>
				<key>Group</key>
				<string>Product Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>^~@b</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Analyze…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>toggleInspectorArea:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.Inspectors.ToggleVisibility</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.Inspectors.ToggleVisibility</string>
				<key>Group</key>
				<string>View Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>$@B</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Inspectors</string>
				<key>Title</key>
				<string>Show Inspector</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>jumpToLine:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>
				<key>Group</key>
				<string>Navigate Menu for Asset Catalog Comparison</string>
				<key>GroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.MenuDefinition.Navigate</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>^g</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Jump to…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>jumpToLine:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>
				<key>Group</key>
				<string>Navigate Menu for Commit Sheet</string>
				<key>GroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.MenuDefinition.Navigate</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>^g</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Jump to…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>jumpToLine:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>
				<key>Group</key>
				<string>Navigate Menu for Documentation</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.DocViewingNavigateMenu</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>^g</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Jump to…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>jumpToLine:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>
				<key>Group</key>
				<string>Navigate Menu for Playground</string>
				<key>GroupID</key>
				<string>Xcode.IDEPlaygroundEditor.MenuDefinition.Navigate</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>^g</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Jump to…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>jumpToLine:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>
				<key>Group</key>
				<string>Navigate Menu for Source Code</string>
				<key>GroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.MenuDefinition.Navigate</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>^g</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Jump to…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>moveFocusToEditor:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.MoveFocusToEditor</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.MoveFocusToEditor</string>
				<key>Group</key>
				<string>Navigate Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>@1</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Move Focus to Editor…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>changeToStructureNavigator:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.NavigatorsStructure</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.NavigatorsStructure</string>
				<key>Group</key>
				<string>View Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>$@E</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Navigators</string>
				<key>Title</key>
				<string>Project</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>toggleNavigator:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.NavigatorsToggleVisibility</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.NavigatorsToggleVisibility</string>
				<key>Group</key>
				<string>View Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>@b</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Navigators</string>
				<key>Title</key>
				<string>Show Navigator</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>newFolder:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>IDENewGrouping</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.NewFolder</string>
				<key>Group</key>
				<string>File Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>~@n</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>New</string>
				<key>Title</key>
				<string>Folder</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>openQuickly:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.OpenQuickly</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.OpenQuickly</string>
				<key>Group</key>
				<string>File Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>@p</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Open Quickly…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>printDocument:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.Print</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.Print</string>
				<key>Group</key>
				<string>File Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Print…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>selectNextOccurrence:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.SelectNextOccurrence</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.SelectNextOccurrence</string>
				<key>Group</key>
				<string>Find Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>@d</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Select Next Occurrence</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>useSelectionForReplace:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.UseSelectionForReplace</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.UseSelectionForReplace</string>
				<key>Group</key>
				<string>Find Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Use Selection for Replace</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>moveCurrentLineDown:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineDown</string>
				<key>CommandID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineDown</string>
				<key>Group</key>
				<string>Editor Menu for Asset Catalog Comparison</string>
				<key>GroupID</key>
				<string>Xcode.DeltaComparisonEditor.MenuDefinition.Editor</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>~</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Structure</string>
				<key>Title</key>
				<string>Move Line Down</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>moveCurrentLineDown:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineDown</string>
				<key>CommandID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineDown</string>
				<key>Group</key>
				<string>Editor Menu for Playground</string>
				<key>GroupID</key>
				<string>Xcode.IDEPlaygroundEditor.MenuDefinition.Editor</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>~</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Structure</string>
				<key>Title</key>
				<string>Move Line Down</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>moveCurrentLineDown:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineDown</string>
				<key>CommandID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineDown</string>
				<key>Group</key>
				<string>Editor Menu for Source Code</string>
				<key>GroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.MenuDefinition.Editor</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>~</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Structure</string>
				<key>Title</key>
				<string>Move Line Down</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>moveCurrentLineUp:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineUp</string>
				<key>CommandID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineUp</string>
				<key>Group</key>
				<string>Editor Menu for Asset Catalog Comparison</string>
				<key>GroupID</key>
				<string>Xcode.DeltaComparisonEditor.MenuDefinition.Editor</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>~</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Structure</string>
				<key>Title</key>
				<string>Move Line Up</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>moveCurrentLineUp:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineUp</string>
				<key>CommandID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineUp</string>
				<key>Group</key>
				<string>Editor Menu for Playground</string>
				<key>GroupID</key>
				<string>Xcode.IDEPlaygroundEditor.MenuDefinition.Editor</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>~</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Structure</string>
				<key>Title</key>
				<string>Move Line Up</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>moveCurrentLineUp:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineUp</string>
				<key>CommandID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineUp</string>
				<key>Group</key>
				<string>Editor Menu for Source Code</string>
				<key>GroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.MenuDefinition.Editor</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>~</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Structure</string>
				<key>Title</key>
				<string>Move Line Up</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>renameRefactor:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.Refactor.Rename</string>
				<key>CommandID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.Refactor.Rename</string>
				<key>Group</key>
				<string>Editor Menu for Asset Catalog Comparison</string>
				<key>GroupID</key>
				<string>Xcode.DeltaComparisonEditor.MenuDefinition.Editor</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string></string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Refactor</string>
				<key>Title</key>
				<string>Rename…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>renameRefactor:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.Refactor.Rename</string>
				<key>CommandID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.Refactor.Rename</string>
				<key>Group</key>
				<string>Editor Menu for Playground</string>
				<key>GroupID</key>
				<string>Xcode.IDEPlaygroundEditor.MenuDefinition.Editor</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string></string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Refactor</string>
				<key>Title</key>
				<string>Rename…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>renameRefactor:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.Refactor.Rename</string>
				<key>CommandID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.Refactor.Rename</string>
				<key>Group</key>
				<string>Editor Menu for Source Code</string>
				<key>GroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.MenuDefinition.Editor</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string></string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Refactor</string>
				<key>Title</key>
				<string>Rename…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>editorMenuTogglePlayPause:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.SpriteKit.CmdDefinition.TogglePauseSimulate</string>
				<key>CommandID</key>
				<string>Xcode.SpriteKit.CmdDefinition.TogglePauseSimulate</string>
				<key>Group</key>
				<string>Editor Menu for SpriteKit Scene Editor</string>
				<key>GroupID</key>
				<string>Xcode.SpriteKit.Scene.Editor.MenuDefinition</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Edit / Simulate</string>
			</dict>
		</array>
		<key>Version</key>
		<integer>3</integer>
	</dict>
	<key>Text Key Bindings</key>
	<dict>
		<key>Key Bindings</key>
		<dict>
			<key></key>
			<array>
				<array>
					<string>moveBackward:</string>
					<string>moveToBeginningOfParagraph:</string>
				</array>
				<string>moveBackward:</string>
				<array>
					<string>moveForward:</string>
					<string>moveToEndOfParagraph:</string>
				</array>
				<string>moveParagraphForwardAndModifySelection:</string>
			</array>
			<key>$@K</key>
			<string>deleteLine:</string>
			<key>$</key>
			<string>moveToBeginningOfDocumentAndModifySelection:</string>
			<key>@l</key>
			<string>selectLine:</string>
		</dict>
		<key>Version</key>
		<integer>3</integer>
	</dict>
</dict>
</plist>
```

Restart Xcode and select the "VSCode" keybindings.
