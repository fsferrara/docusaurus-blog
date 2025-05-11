// /----------------------------------------------------------------------------\
// | WikiLink Plugin                                                            |
// \----------------------------------------------------------------------------/
// This file configures the wikiLink remark plugin for Docusaurus. Usage:
//
//     import {wikilinksConfig} from './wikilinks.config';
//
//     docs: {
//         remarkPlugins: [
//             wikilinksConfig
//         ],
//     },

import {wikiLinkPlugin} from 'remark-wiki-link'
import path from 'path';
import fs from 'fs'

// Function to recursively scan the docs directory and build a map of filenames to their paths
function buildFileMap(dir, fileMap = {}, baseDir = dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            buildFileMap(filePath, fileMap, baseDir);
        } else if (path.extname(file) === '.md') {
            const relativePath = path.relative(baseDir, filePath);
            const fileName = path.basename(file, '.md');
            fileMap[fileName.toLowerCase()] = relativePath;
        }
    }
    return fileMap;
}

// Build the file map
const docsDir = path.join(__dirname, '../digital-garden');
const fileMap = buildFileMap(docsDir);


export const wikilinksConfig = [wikiLinkPlugin, 
        { 
            permalinks: Object.keys(fileMap),
            pageResolver: (name) => {
                const lower = name.toLowerCase();
                if (fileMap[lower]) {
                    // Remove the file extension and convert slashes to match Docusaurus URL format
                    return ['/notes/'+fileMap[lower].replace(/\.md$/, '').replace(/\\/g, '/')];
                }
                return ['/search/?q='+lower];
            },
            hrefTemplate: (permalink) => {
                return `${permalink}`;
            },
            aliasDivider: '|'
        }
    ];
