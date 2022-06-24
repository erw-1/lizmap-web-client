describe('Zoom to layer', function() {
    it('Projection EPSG:4326', function(){
        // Go to world 4326
        cy.visit('/index.php/view/map/?repository=testsrepository&project=world-4326')

        // Zoom to layer rectangle
        cy.get('#layer-rectangle > td:first > span.label').click()
        cy.get('#sub-dock button.layerActionZoom').click()

        // Click on the map to get a popup
        cy.mapClick(480,340)

        // Check popup displayed
        cy.get('#mapmenu li.nav-dock.popupcontent').should('have.class', 'active')
        cy.get('#popupcontent div.lizmapPopupContent div.lizmapPopupSingleFeature h4').should('length', 1)

        // Zoom to world layer
        cy.get('#button-switcher').click()
        cy.get('#layer-world > td:first > span.label').click()
        cy.get('#sub-dock button.layerActionZoom').click()

        // Click on the map to get no popup
        cy.mapClick(480,340)

        // Check no popup displayed
        cy.get('#mapmenu li.nav-dock.popupcontent').should('have.class', 'active')
        cy.get('#popupcontent div.lizmapPopupContent div.lizmapPopupSingleFeature h4').should('length', 0)

        // The dock with content will be closed
        //cy.wait(5000)
        //cy.get('#mapmenu li.nav-dock.popupcontent').should('not.have.class', 'active')
    })
    it('Projection EPSG:3857', function(){
        // Go to world 3857
        cy.visit('/index.php/view/map/?repository=testsrepository&project=world-3857')

        // Zoom to layer rectangle
        cy.get('#layer-rectangle > td:first > span.label').click()
        cy.get('#sub-dock button.layerActionZoom').click()

        // Click on the map to get a popup
        cy.mapClick(480,340)

        // Check popup displayed
        cy.get('#mapmenu li.nav-dock.popupcontent').should('have.class', 'active')
        cy.get('#popupcontent div.lizmapPopupContent div.lizmapPopupSingleFeature h4').should('length', 1)

        // Zoom to world layer
        cy.get('#button-switcher').click()
        cy.get('#layer-world > td:first > span.label').click()
        cy.get('#sub-dock button.layerActionZoom').click()

        // Click on the map to get no popup
        cy.mapClick(480,340)

        // Check no popup displayed
        cy.get('#mapmenu li.nav-dock.popupcontent').should('have.class', 'active')
        cy.get('#popupcontent div.lizmapPopupContent div.lizmapPopupSingleFeature h4').should('length', 0)
    })
})
