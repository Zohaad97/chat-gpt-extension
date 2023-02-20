import React, { useState } from 'react';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
function Sidebar() {
 
  return (
    <SidebarMenu>
      <SidebarMenu.Header>
        <SidebarMenu.Brand>
          {/* Your brand icon */}
        </SidebarMenu.Brand>
        <SidebarMenu.Toggle />
      </SidebarMenu.Header>
      <SidebarMenu.Body>
        <SidebarMenu.Nav>
          <SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Icon>
              {/* Menu item icon */}
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title>
              Title 0
          </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
          <SidebarMenu.Nav />
          <SidebarMenu.Sub>
            <SidebarMenu.Sub.Toggle>
              <SidebarMenu.Nav.Icon />
              <SidebarMenu.Nav.Title>
                Title 1
            </SidebarMenu.Nav.Title>
            </SidebarMenu.Sub.Toggle>
            <SidebarMenu.Sub.Collapse>
              <SidebarMenu.Nav>
                <SidebarMenu.Nav.Link>
                  <SidebarMenu.Nav.Icon>
                    {/* Submenu item icon */}
                  </SidebarMenu.Nav.Icon>
                  <SidebarMenu.Nav.Title>
                    Title 2
                </SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
              </SidebarMenu.Nav>

              <SidebarMenu.Nav>
                <SidebarMenu.Nav.Link>
                  <SidebarMenu.Nav.Icon>
                    {/* Submenu item icon */}
                  </SidebarMenu.Nav.Icon>
                  <SidebarMenu.Nav.Title>
                    Title 3
                </SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
              </SidebarMenu.Nav>
            </SidebarMenu.Sub.Collapse>
          </SidebarMenu.Sub>
        </SidebarMenu.Nav>
      </SidebarMenu.Body>
    </SidebarMenu>
  );
}

export default Sidebar;